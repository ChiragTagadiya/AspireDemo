import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function pop() {
  if (navigationRef.isReady()) {
    const popAction = StackActions.pop(1);
    navigationRef.dispatch(popAction);
  }
}

/**
 * Ref: https://reactnavigation.org/docs/navigating-without-navigation-prop/
 * How to use navigation.navigate from a component outside the stack.navigation
 */
