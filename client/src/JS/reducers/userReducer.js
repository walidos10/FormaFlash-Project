import {
  ADD_IMAGE_SUCCESS,
  ADD_IMAGE_FAIL,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  ADD_NEWSLETTER,
  ADD_NEWSLETTER_FAIL,
  ADD_DEVIS,
  ADD_CONTACT,
  GET_SCHOOL,
  GET_SCHOOL_SUCCESS,
  GET_SCHOOL_BY_ID,
  GET_SEJOUR_SUCCESS,
  GET_SEJOUR_BY_ID,
} from "../constants/actionsType";

const initialState = {
  loading: false,
  errors: null,
  isAuth: false,
  school: [],
  sejour: [],
  image: [],
  user: [],
  locSt: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_REGISTER:
    case USER_LOGIN:
    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,

        user: payload,
      };
    case USER_REGISTER_FAIL:
    case USER_LOGIN_FAIL:
    case GET_PROFILE_FAIL:
      return {
        ...state,
        loading: false,

        errors: payload,
      };
    case ADD_IMAGE_SUCCESS:
      return {
        ...state,
        image: payload,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        token: payload,
        locSt: true,
      };

    case GET_SCHOOL_SUCCESS:
    case GET_SCHOOL_BY_ID:
      return { ...state, loading: false, school: payload.school };
    case GET_SEJOUR_BY_ID:
    case GET_SEJOUR_SUCCESS:
      return { ...state, loading: false, sejour: payload.sejour };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        locSt: true,

        user: payload,
      };
    case ADD_NEWSLETTER:
      return {
        ...state,
        user: payload,
      };
    case ADD_NEWSLETTER:
      return {
        ...state,
        user: payload,
      };
    case ADD_CONTACT:
      return {
        ...state,
        user: payload,
      };
    case ADD_DEVIS:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
