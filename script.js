const userLogin = (ms) => new Promise((resolve) => setTimeout(resolve,ms));

userLogin(3000)
    .then(() => console.log(`Congrats Server Has Recevied Data`));

let loadSite = () => {
    console.log("loading Data")
};

loadSite();