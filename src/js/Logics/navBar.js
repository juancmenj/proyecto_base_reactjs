
import { navBarApi } from "../Api/navBar";
import { getNavBarRequest } from "../Request/navBar";

export async function navBarLogics(callback, payload = {}) {
  const request = getNavBarRequest(payload);

  await navBarApi(request)
    .then(response => {
      const { successCallback } = callback;
      const { successData, success } = response;

      successCallback(
        {
          data: successData[0],
          success
        }
      );
    })
    .catch(error => {
      const { errorCallback } = callback;
      const { errorData, success } = error;

      errorCallback( {
        error: errorData,
        success
      })
    });
}
