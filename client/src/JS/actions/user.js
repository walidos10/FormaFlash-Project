import {
  ADD_IMAGE_SUCCESS,
  ADD_IMAGE_FAIL,
  GET_SCHOOL_BY_ID,
  GET_SCHOOL_SUCCESS,
  GET_SCHOOL,
  ADD_NEWSLETTER,
  ADD_NEWSLETTER_FAIL,
  ADD_DEVIS,
  ADD_DEVIS_FAIL,
  ADD_CONTACT,
  ADD_CONTACT_FAIL,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  GET_SEJOUR_SUCCESS,
  GET_SEJOUR_BY_ID,
  GET_SEJOUR_FAIL,
  GET_SEJOUR,
} from "../constants/actionsType";
import axios from "axios";
//import { RiEmpathizeLine } from "react-icons/ri";
export const getSchool = () => async (dispatch) => {
  /* dispatch(userLogin());
  dispatch(getProfile());*/
  dispatch({ type: GET_SCHOOL });

  axios
    .get("/user/listSchool")
    .then((res) => dispatch({ type: GET_SCHOOL_SUCCESS, payload: res.data }))
    .catch((err) => console.log(err));
};
export const getSchoolById = (id) => (dispatch) => {
  axios
    .get(`/user/listSchool/${id}`)
    .then((res) => dispatch({ type: GET_SCHOOL_BY_ID, payload: res.data }));
};
export const getSejour = () => async (dispatch) => {
  /* dispatch(userLogin());
  dispatch(getProfile());*/
  dispatch({ type: GET_SEJOUR });

  axios
    .get("/user/listSejour")
    .then((res) => dispatch({ type: GET_SEJOUR_SUCCESS, payload: res.data }))
    .catch((err) => console.log(err));
};
export const getSejourById = (id) => (dispatch) => {
  axios
    .get(`/user/listSejour/${id}`)
    .then((res) => dispatch({ type: GET_SEJOUR_BY_ID, payload: res.data }));
};
export const userRegister = (newUser) => async (dispatch) => {
  //console.log(newUser);
  // dispatch({ type: USER_REGISTER });

  try {
    const userAdd = await axios.post("/user/register", newUser);
    console.log(userAdd);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: userAdd.data });
    //await dispatch(userLogin(userAdd));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.response.data });
  }
};

export const userLogin = (loginCred) => async (dispatch) => {
  dispatch({ type: USER_LOGIN });
  //console.log(loginCred);

  try {
    const userLogin = await axios.post("/user/login", loginCred);
    console.log(userLogin);
    localStorage.setItem("token", userLogin.data.token);

    console.log(userLogin);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: userLogin.data.token });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data });
  }
};

export const getProfile = () => async (dispatch) => {
  dispatch({ type: GET_PROFILE });

  try {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: token,
      },
    };

    const userProfil = await axios.get("/user/current", config);

    dispatch({ type: GET_PROFILE_SUCCESS, payload: userProfil.data });
  } catch (error) {
    dispatch({ type: GET_PROFILE_FAIL, payload: error.response.data });
  }
};

export const addnewSletter = (newSletter) => async (dispatch) => {
  //dispatch({ type: USER_REGISTER });

  try {
    const letter = await axios.post("/user/newSletter", newSletter);

    console.log(letter);
    dispatch({ type: ADD_NEWSLETTER, payload: letter.data });
  } catch (error) {
    dispatch({ type: ADD_NEWSLETTER_FAIL, payload: error.response.data });
  }
};

export const addrdv = (newrdv) => async (dispatch) => {
  //dispatch({ type: USER_REGISTER });

  try {
    const rdv = await axios.post("/user/contact", newrdv);

    console.log(rdv);
    dispatch({ type: ADD_CONTACT, payload: rdv.data });
  } catch (error) {
    dispatch({ type: ADD_CONTACT_FAIL, payload: error.response.data });
  }
};

export const adddevis = (newdevis) => async (dispatch) => {
  //dispatch({ type: USER_REGISTER });

  try {
    const devis = await axios.post("/user/contact", newdevis);

    console.log(devis);
    dispatch({ type: ADD_DEVIS, payload: devis.data });
  } catch (error) {
    dispatch({ type: ADD_DEVIS_FAIL, payload: error.response.data });
  }
};

export const addimage = (formData) => async (dispatch) => {
  //dispatch({ type: USER_REGISTER });
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };
  //console.log(image[0]);

  try {
    const newimage = await axios.post("/upload", formData, config);

    dispatch({ type: ADD_IMAGE_SUCCESS, payload: newimage.data });
  } catch (error) {
    dispatch({ type: ADD_IMAGE_FAIL, payload: error.response.data });
  }
};
