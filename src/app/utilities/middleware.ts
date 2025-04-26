import {
  Dispatch,
  isFulfilled,
  isRejectedWithValue,
  Middleware,
  UnknownAction,
} from "@reduxjs/toolkit";
import { closeDrawer } from "../slice/drawerSlice";
import { closeModal } from "../slice/modalSlice";
import { openNotification } from "../slice/notificationSlice";
import { RootState } from "../store";

interface SuccessPayload {
  data: unknown;
  message: string;
  success: boolean;
}

interface ErrorPayload {
  status: number;
  data: {
    message: string;
    success: boolean;
  };
}

interface RejectedActionMeta {
  arg: {
    endpointName: string;
  };
}

// Constants
const IGNORED_ENDPOINTS = Object.freeze([
  "login",
  "sendOTP",
  "matchOTP",
  "getProfile",
]) as ReadonlyArray<string>;

// Success Middleware
export const successMiddleware: Middleware<
  unknown,
  unknown,
  Dispatch<UnknownAction>
> = (state) => (next) => (action) => {
  try {
    if (isFulfilled(action)) {
      const { type: actionType } = action;
      const endpointName = (action.meta as RejectedActionMeta)?.arg
        ?.endpointName;
      const { message } = action.payload as SuccessPayload;
      const shouldShowMessage =
        actionType.includes("executeMutation") &&
        endpointName &&
        !IGNORED_ENDPOINTS.includes(endpointName);

      if (shouldShowMessage) {
        state.dispatch(
          openNotification({
            description: message,
          })
        );
        state.dispatch(closeModal());
        state.dispatch(closeDrawer());
      }
    }
    return next(action);
  } catch {
    return next(action);
  }
};

// Error Middleware
export const errorMiddleware: Middleware<
  unknown,
  unknown,
  Dispatch<UnknownAction>
> = (state) => (next) => (action) => {
  try {
    if (isRejectedWithValue(action)) {
      const { endpointName } = (action.meta as RejectedActionMeta).arg;
      const { data } = action.payload as ErrorPayload;

      const token = (state.getState() as RootState).auth.token;

      if (token && !IGNORED_ENDPOINTS.includes(endpointName)) {
        state.dispatch(
          openNotification({
            type: "error",
            description: data.message,
            placement: "bottomLeft",
          })
        );
      }
    }
    return next(action);
  } catch {
    return next(action);
  }
};
