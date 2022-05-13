async function getData(uId) {
    let promise = new Promise((resolve, reject) => {
        let serverUp = true;

        if (serverUp) {
            setTimeout(() => {
                return resolve(uId + "@gmail.com");
            }, 4000);
        }
        else {
            return reject("Failed fetching data");
        }

    });

    try {
        let result = await promise;
        console.log("Data fetched!");
        console.log("Email id of the user id is: " + result);
    }
    catch (error) {
        console.log(error);
    }

    console.log("end");

}

console.log("start");
var email = getData("skc");