import { CanActivateFn } from '@angular/router';

export const notifyGuard: CanActivateFn = (route, state) => {
  if(confirm("If you go back your progess will not save? are you willing to go back?")){
    return true;
  }
  else{
    return false;
  }
};
