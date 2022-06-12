import axios from "axios";

export const getAllUsers =
(page) =>
async (dispatch) => {
  try {
    dispatch({
      type: "allUsersRequest",
    });

    const { data } = await axios.get(`/api/users?page=${page}`);
    dispatch({
      type: "allUsersSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "allUsersFailure",
      payload: error.response.data,
    });
  }
};

export const getUserProfile = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "userProfileRequest",
      });
  
      const { data } = await axios.get(`/api/users/${id}`);
      dispatch({
        type: "userProfileSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "userProfileFailure",
        payload: error.response.data,
      });
    }
  };