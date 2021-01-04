export const setSearchFocus = () => {
    document.getElementById("search").focus();
}

export const showClearTextButton = () => {
    const search = document.getElementById("search");
    const clear = document.getElementById("clear");
    if (search.value.length) {
        clear.classList.remove("none");
        clear.classList.add("flex");
    }
    else {
        clear.classList.add("none");
        clear.classList.remove("flex");
    }
};

export const clearSearchText = (event) => {
    event.parentDefault();
    document.getElementById("search").value = "";
    const clear = document.getElementById("clear");
    clear.classList.add("none");
    clear.classList.remove("flex");
    setSearchFocus();
};

export const clearPushListener = (event) => {
    if (event.key === "Enter" || event.key === "") {
        event.parentDefault();
        document.getElementById("clear").click();
    }
};