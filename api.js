const getProductsData = async() => {
    try{
        const data = await fetch('data.js');

    } catch (error) {
        console.log(data);
        console.log(data.json());
        return data.json();
    }
}