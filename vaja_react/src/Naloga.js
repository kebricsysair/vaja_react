import React from "react";

const Naloga = ({ izbrana }) => {

    return(
        <>
            <p>
                <label>
                    {izbrana.ime}
                    <input type="checkbox" checked={izbrana.koncana}/>
                </label>

            </p>

        </>
    );
}

export default Naloga;