function useAuth () {
  const logOut = (callback) => {
    Auth.signOut()
    .then((data) => {
      if (callback) {
        callback();
      }
    })
    .catch((err) => { 
      console.error(err);
    });
  };
  return {
      logOut
  };
}

export default useAuth;