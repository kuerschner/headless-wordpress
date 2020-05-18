import React from "react";
import { makeStyles, createStyles, Grid, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        padding: "4rem"
    },
}));


const PrivacyPolicy = props => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <Grid container justify="center">
                <Grid item xs={12} className={classes.root}>
                    <h1>PRIVACY POLICY</h1>
                    <p><em>Effective February 1, 2020</em></p>

                    <h2>APPLICABILITY OF THIS PRIVACY POLICY</h2>
                    <p>Truman Rx, LLC, on its own behalf and on behalf of its affiliates (collectively referred to as “Truman”), owns and operates the website located at www.trumanrx.com (“Website”). This Privacy Policy describes the information Truman collects about Website visitors on the publicly available portions of the Website and how that information is used.</p>

                    <h2>AGREEMENT TO THIS PRIVACY POLICY</h2>
                    <p>Your access and use of the Website is subject to your agreement with this Privacy Policy. By using this Website, you expressly agree to the terms of this Privacy Policy and consent to the collection and use of information as discussed in this Privacy Policy. If you do not agree with this Privacy Policy, please do not use or access the Website for any purpose. </p>

                    <h2>COLLECTION, USE AND DISCLOSURE OF INFORMATION</h2>
                    <p>Either Truman or a third party vendor on behalf of Truman may automatically collect information while visitors browse the Website. We may collect such information by tracking, or asking a third party vendor to track, your click-stream activity when such information is not tied to a user ID through the use of “cookie” technology or by tracking internet protocol (“IP”) addresses. We collect information about visitors and their devices, including, but not limited to:</p>
                    <ul>
                        <li>IP Address </li>
                        <li>Operating System </li>
                        <li>Browser Software</li>
                        <li>Internet Service Provider</li>
                        <li>Geographic Location</li>
                        <li>Type of Device</li>
                        <li>Date &amp; Time Accessed and Used Website</li>
                        <li>Website Features Used</li>
                        <li>Length of Website Use</li>
                        <li>Website Links Clicked &mp; Pages Used </li>
                        <li>Pages Viewed Before &amp; After Website Use</li>
                    </ul>
                    <p>We use this information to continuously enhance our Website and to better serve our visitors’ needs. Some of the information we collect from visitors, such as IP Address, may be considered identifiable personal information ("Personal Information"). Additionally, there are times on our Website that visitors are able to voluntarily submit Personal Information, such as their name, phone number, and/or email address in order to obtain more information from Truman. We may remove personal identifiers from your Personal Information and maintain and use it in a de-identified form ("De-Identifiable Information"). De-Identifiable Information and Personal Information are collectively referred to throughout this Privacy Policy as "Information".</p>
                    <p>The Information collected from visitors on our Website may be shared with our suppliers and vendors and used in the aggregate to create summary statistics that help us analyze the Website’s usage trends, assess what information is of most and least importance, determine technical design specifications, arrange the Websites in the most user-friendly way, and identify system performance or problem areas.</p>
                    <p>By continuing to use the Website, you hereby consent to the use and disclosure of your Information as set forth below:</p>
                    <ul>
                        <li>within Truman or with our service providers such as a cloud service provider in Canada or the United States for data storage;</li>
                        <li>with our financial, insurance, legal, accounting or other advisors that provide professional services to us;</li>
                        <li>to respond to a subpoena, order, legal process, or government request;</li>
                        <li>to protect, establish or exercise our legal rights or defend against legal claims;</li>
                        <li>to investigate, detect, suppress, prevent or take action regarding illegal or prohibited activities, suspected fraud, situations involving potential threats to the reputation or physical safety of any person;</li>
                        <li>if we are to be sold, merged, or amalgamated or substantially all of our assets are to be sold or disposed of, your personal information may be transferred to a potential purchaser if, and to the extent necessary, it is required for the purposes of deciding whether to proceed with the proposed transaction and completing it. If such a sale, merger, acquisition, or disposal is completed, we will use reasonable efforts to direct the transferee to use personal information you have provided to us in a manner that is consistent with this Privacy Policy. Following such a sale or transfer, you may contact the entity to which we transferred your personal information with any inquiries concerning the processing of that information; or</li>
                        <li>as otherwise required by law.</li>
                    </ul>

                    <h2>COOKIES</h2>
                    <p>We use "cookies" to help you better navigate the Website. A "cookie" is a small piece of information sent by Truman’s web-based applications that are stored by your web browser on your computer’s hard drive. Cookies enhance your online experience by saving your preferences while you are visiting a particular website. The cookies do not contain any identifiable information and cannot profile your system or collect information from your hard drive. Most Internet browsers automatically accept cookies, but you can set your browser to refuse them or to alert you when they are being sent.</p>

                    <h2>YOUR RIGHTS REGARDING YOUR PERSONAL INFORMATION</h2>
                    <p>You have a right to request that Truman amend or delete the Personal Information it collects from your use of the Website if you believe it is incorrect or incomplete, and you may request an amendment or deletion for as long as the Personal Information is retained by Truman. You must submit your request in writing to Truman and provide a reason to support the requested amendment. Truman may, under certain circumstances, deny your request by sending you a written notice of denial.</p>
                    <p>Subject to applicable law, you may withdraw your consent to uses and disclosures of Personal Information as outlined in this Privacy Policy. You must submit your request in writing to Truman. Withdrawing consent does not invalidate consent to any collection, use or disclosure of Personal Information to which you consented before consent was withdrawn. If you withdraw consent, or refuse further consent, Truman’s ability to offer services to you may be limited.</p>

                    <h2>HOW TO CONTACT US</h2>
                    <p>Questions or comments regarding this Privacy Policy must be submitted to Truman by electronic means as follows:</p>
                    <p><a href="mailto:info@trumanrx.com">info@trumanrx.com</a></p>
                </Grid>
            </Grid>
        </Container>
    )
}

export default PrivacyPolicy;
