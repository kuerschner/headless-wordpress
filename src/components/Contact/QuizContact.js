import React from "react";
import HubspotForm from "react-hubspot-form";

const QuizContact = () => {
    return(
        <div>
            <HubspotForm
                portalId='7044962'
                formId='7218a722-8f3b-4224-a462-4052149247c5'
                onSubmit={() => console.log('Submit!')}
                onReady={(form) => console.log('Form ready!')}
                loading={<div>Loading...</div>}
            />
        </div>
    )
}

export default QuizContact;