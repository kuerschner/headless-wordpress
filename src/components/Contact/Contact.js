import React from "react";
import HubspotForm from "react-hubspot-form";

const Contact = () => {
    return(
        <div>
            <HubspotForm
                portalId='7044962'
                formId='5a49c981-98e4-4e9e-b496-d2a694bbf732'
                onSubmit={() => console.log('Submit!')}
                onReady={(form) => console.log('Form ready!')}
                loading={<div>Loading...</div>}
            />
        </div>
    )
}

export default Contact;