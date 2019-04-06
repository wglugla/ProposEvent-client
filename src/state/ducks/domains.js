const domain = `localhost:5000`;

export const usersDomain = `${domain}/users`;
export const userInfoDomain = id => `http://${domain}/users/${id}`;
export const userEventsDomain = id => `${domain}/users/${id}/events`;
export const userSignedEventsDomain = id => `${domain}/users/${id}/signedEvents`;
export const userSignupDomain = `http://${domain}/signup`;
export const userSigninDomain = `http://${domain}/signin`;

export const eventsDomain = `${domain}/events`;
export const eventInfoDomain = id => `${domain}/event/${id}`;
export const eventCreateDomain = `http://${domain}/events/create`;
export const eventModifyComain = id => `${domain}/events/modyfy/${id}`;
export const eventAddMember = `${domain}/events/addmember`;
export const eventRemoveMember = `${domain}/events/removemember`;

export const tagsDomain = `${domain}/tags`;
export const tagInfoDomain = id => `${domain}/tags/${id}`;
