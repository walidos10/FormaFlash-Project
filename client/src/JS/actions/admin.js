import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  GET_SCHOOL,
  GET_SCHOOL_SUCCESS,
  GET_SCHOOL_BY_ID,
  GET_SEJOUR,
  GET_SEJOUR_SUCCESS,
  GET_SEJOUR_BY_ID,
  ADD_SCHOOL_FAIL,
  ADD_SCHOOL_SUCCESS,
  ADD_SEJOUR_FAIL,
  ADD_SEJOUR_SUCCESS,
  GET_CONTACT,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAIL,
  GET_NEWSLETTER,
  GET_NEWSLETTER_SUCCESS,
  GET_NEWSLETTER_FAIL,
} from "../constants/actionsType";
import axios from "axios";

export const userLogin = (loginCred) => async (dispatch) => {
  dispatch({ type: USER_LOGIN });

  try {
    const userLogin = await axios.post("/admin/login", loginCred);

    localStorage.setItem("token", userLogin.data.token);

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

    const userProfil = await axios.get("/admin/current", config);

    dispatch({ type: GET_PROFILE_SUCCESS, payload: userProfil.data });
  } catch (error) {
    dispatch({ type: GET_PROFILE_FAIL, payload: error.response.data });
  }
};

//// getSchool
export const getSchool = () => async (dispatch) => {
  /* dispatch(userLogin());
  dispatch(getProfile());*/
  dispatch({ type: GET_SCHOOL });

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: token,
    },
  };

  axios
    .get("/admin/listSchool", config)
    .then((res) => dispatch({ type: GET_SCHOOL_SUCCESS, payload: res.data }))
    .catch((err) => console.log(err));
};
export const getSchoolById = (id) => (dispatch) => {
  axios
    .get(`/admin/listSchool/${id}`)
    .then((res) => dispatch({ type: GET_SCHOOL_BY_ID, payload: res.data }));
};

export const editSchool = (id, editSchool) => (dispatch) => {
  console.log(id);
  console.log(editSchool);

  axios
    .put(`/admin/listSchool/${id}`, editSchool)
    .then(() => dispatch(getSchool()))
    .catch((err) => console.log(err));
};
export const deleteSchool = (id) => (dispatch) => {
  console.log(id);
  axios
    .delete(`/admin/listSchool/${id}`)
    .then(() => dispatch(getSchool()))
    .catch((err) => console.log(err));
};

/*
  try {
    let listSchool = await axios.get("/admin/listSchool");
    dispatch({ type: GET_SCHOOL_SUCCESS, payload: listSchool.data });
  } catch (error) {
    dispatch({ type: GET_SCHOOL_FAIL, payload: error.response.data });
  }
};
*/
export const addSchool = (newSchool) => async (dispatch) => {
  //dispatch({ type: USER_REGISTER });
  //console.log(formData());

  //const formData = new FormData();
  //formData.append("file", newSchool);

  //newSchool.image = formData;
  //console.log(newSchool.image);
  //console.log(formData.files);
  console.log(newSchool);

  try {
    const schoolAdd = await axios.post("/admin/addSchool", newSchool);

    console.log(schoolAdd);
    dispatch({ type: ADD_SCHOOL_SUCCESS, payload: schoolAdd.data });
  } catch (error) {
    dispatch({ type: ADD_SCHOOL_FAIL, payload: error.response.data });
  }
};

///////////// getSejour

export const getSejour = () => async (dispatch) => {
  /*dispatch(userLogin());
  dispatch(getProfile());*/
  dispatch({ type: GET_SEJOUR });

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: token,
    },
  };

  axios
    .get("/admin/listSejour", config)
    .then((res) => dispatch({ type: GET_SEJOUR_SUCCESS, payload: res.data }))
    .catch((err) => console.log(err));
};

//sejour by id
export const getSejourById = (id) => (dispatch) => {
  axios
    .get(`/admin/listSejour/${id}`)
    .then((res) => dispatch({ type: GET_SEJOUR_BY_ID, payload: res.data }));
};

export const editSejour = (id, editSejour) => (dispatch) => {
  axios
    .put(`/admin/listSejour/${id}`, editSejour)
    .then(() => dispatch(getSejour()))
    .catch((err) => console.log(err));
};
export const deleteSejour = (id) => (dispatch) => {
  console.log(id);
  axios
    .delete(`/admin/listSejour/${id}`)
    .then(() => dispatch(getSejour()))
    .catch((err) => console.log(err));
};

///add sejour

export const addSejour = (newSejour) => async (dispatch) => {
  try {
    //  const token = localStorage.getItem("token");

    /* const config = {
      headers: {
        Authorization: `Bearer${token}`,
      },
    };*/
    const sejour = await axios.post("/admin/addSejour", newSejour);

    console.log(sejour);
    dispatch({ type: ADD_SEJOUR_SUCCESS, payload: sejour.data });
  } catch (error) {
    dispatch({ type: ADD_SEJOUR_FAIL, payload: error.response.data });
  }
};

export const getNewsletter = () => async (dispatch) => {
  //dispatch({ type: GET_NEWSLETTER_FAIL });

  try {
    const res = await axios.get("/user/listNewsletter");

    dispatch({ type: GET_NEWSLETTER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_NEWSLETTER_FAIL, payload: error.response.data });
  }
};

export const getContact = () => async (dispatch) => {
  //dispatch({ type: GET_NEWSLETTER_FAIL });

  try {
    const res = await axios.get("/user/listContact");

    dispatch({ type: GET_CONTACT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_CONTACT_FAIL, payload: error.response.data });
  }
};
