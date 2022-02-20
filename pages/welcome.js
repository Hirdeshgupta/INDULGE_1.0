// import AuthService from "../services/auth.service";
import Link from "next/link";
import { useRouter } from "next/router";
const Welcome = (props) => {
  const router = useRouter();
  //   if (props.match.path === "/confirm/:confirmationCode") {
  //     AuthService.verifyUser(props.match.params.confirmationCode);
  //   }
  //   const verifyUser = (code) => {
  //     return axios.get(API_URL + "confirm/" + code).then((response) => {
  //       return response.data;
  //     });
  //   };
  return (
    <div>
      <header>
        <h3>
          <strong>Account confirmed!</strong>
        </h3>
      </header>
      <br />
      <div>
        <a
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            router.push("/login");
          }}
        >
          Please Login
        </a>
      </div>
      {/* <Link href="/login"> */}

      {/* </Link> */}
    </div>
  );
};

export default Welcome;
