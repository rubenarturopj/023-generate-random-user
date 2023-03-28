const URL = "https://randomuser.me/api/";

export const getUser = async () => {
    const response = await fetch(URL);

    if (!response.ok) {
        throw new Error("Error while fetching. Fetch not fulfilled");
    }

    const data = await response.json();
    // console.log(data);

    // destructure
    const person = data.results[0];
    // console.log(person);
    const { phone, email } = person;
    const { age } = person.dob;
    // const { dob: { age } } = person; // alternate
    const { password } = person.login;
    const { first, last } = person.name;
    const { state, country } = person.location;
    // const { location: { country, state } } = person; // alternate
    const { large: image } = person.picture;
    return {
        phone: phone,
        email: email,
        age: age,
        password: password,
        street: `${state}, ${country}`,
        name: `${first} ${last}`,
        image: image,
    };
};
