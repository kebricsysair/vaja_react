import React from "react";

const Naloga = ({ izbrana, izbranaNal }) => {

    const nalogaKlik = () => {
        izbranaNal(izbrana.id);
    }

    return(
        <>
            <p>
                <label>
                    {izbrana.ime}
                    <input type="checkbox" checked={izbrana.koncana} onChange={nalogaKlik}/>
                </label>

            </p>

        </>
    );
}

export default Naloga;