<template>
  <div class="container-fluid d-flex justify-content-center ">
    <div class="row">
      <div class="col-md-12">
        <form @submit.prevent="login" autocomplete="off">
          <div class="imgcontainer">
            <img :src="image" alt="Avatar" class="avatar" />
          </div>

          <div class="content">
            <label for="uname"><b>Username</b></label>
            <input
              v-model="Username"
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />
            <label for="psw"><b>Password</b></label>
            <input
              v-model="Password"
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
            <button class="btn btn-dark" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import image from "../assets/avatar.png";
export default {
  name: "Login",
  data() {
    return {
      image: image,
      Username: "",
      Password: "",
    };
  },
  methods: {
    login() {
      const log = {
        Username: this.Username,
        Password: this.Password,
      };
      axios
        .post("/v1/login", log)
        .then((res) => {
          console.log(res.value);

          this.$fire({
            title: "Success",
            text: "Successfully Logged In",
            type: "success",
            timer: 3000,
          });
          this.$router.push({ name: "DeployFile" });
        })
        .catch((err) => {
          this.$fire({
            title: "Failed",
            text: err.response.data.status,
            type: "warning",
            timer: 3000,
            reverseButton: true,
          }).then((r) => {
            console.log(r.value);
          });
        });
      (this.Username = ""), (this.Password = "");
    },
  },
};
</script>

<style>
form {
  border: 1px solid #c9deeb;
  box-shadow: 5px 6px 11px;
}
.row {
  width: 40%;
  margin-top: 3rem;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 0 0 0 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.content {
  padding: 16px;
}

.container {
  margin: 0;
  padding: 0;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
