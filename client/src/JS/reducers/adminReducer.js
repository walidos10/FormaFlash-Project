import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  GET_SCHOOL,
  GET_SCHOOL_SUCCESS,
  GET_SCHOOL_FAIL,
  GET_SCHOOL_BY_ID,
  GET_SEJOUR_SUCCESS,
  GET_SEJOUR_FAIL,
  GET_SEJOUR_BY_ID,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAIL,
  GET_NEWSLETTER_FAIL,
  GET_NEWSLETTER_SUCCESS,
  ADD_SCHOOL_SUCCESS,
  ADD_SEJOUR_SUCCESS,
  ADD_SEJOUR_FAIL,
} from "../constants/actionsType";

const initialState = {
  sejour: [],
  school: [],
  newsletter: [],
  conatct: [],
  loading: false,
  errors: null,
  isAuth: false,
  logout: false,
};

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
    case GET_PROFILE:
      //case GET_SCHOOL:
      return {
        ...state,
        loading: true,
        isAuth: false,
      };

    // case USER_REGISTER_FAIL:

    case USER_LOGIN_FAIL:
    case GET_PROFILE_FAIL:
    case GET_SCHOOL_FAIL:
    case GET_SEJOUR_FAIL:
    case GET_CONTACT_FAIL:
    case GET_NEWSLETTER_FAIL:
      return {
        ...state,
        loading: false,
        isAuth: false,
        errors: payload,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        token: payload,
      };
    case GET_SEJOUR_SUCCESS:
    case GET_SEJOUR_BY_ID:
      return { ...state, loading: false, sejour: payload.sejour };

    case GET_SCHOOL_SUCCESS:
    case GET_SCHOOL_BY_ID:
      return { ...state, loading: false, school: payload.school };
    case GET_NEWSLETTER_SUCCESS:
      return {
        ...state,
        loading: false,
        newsletter: payload.school,
      };
    case GET_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        //  isAuth: true,
        contact: payload.school,
      };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: payload,
      };
    case ADD_SEJOUR_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        sejour: payload,
      };
    case ADD_SCHOOL_SUCCESS:
      return {
        ...state,
        loading: false,
        // isAuth: true,
        user: payload,
      };

    default:
      return state;
  }
};

export default adminReducer;
