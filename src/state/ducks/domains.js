const domain = `http://localhost:5000`;

export const usersDomain = () => `${domain}/users`;
export const userInfoDomain = id => `${domain}/users/${id}`;
export const userEventsDomain = id => `${domain}/users/${id}/events`;
export const userSignedEventsDomain = id => `${domain}/users/${id}/signedEvents`;
export const userSignupDomain = () => `${domain}/signup`;
export const userSigninDomain = () => `${domain}/signin`;
export const eventMatchDomain = (id, tags) => `${domain}/user/${id}/events/suggested?tags=${tags}`;

export const eventsDomain = () => `${domain}/events`;
export const eventInfoDomain = id => `${domain}/events/${id}`;
export const eventDeleteDomain = id => `${domain}/events/${id}`;
export const eventCreateDomain = () => `${domain}/events/create`;
export const eventModifyDomain = id => `${domain}/events/modify/${id}`;
export const eventAddMemberDomain = () => `${domain}/events/addmember`;
export const eventRemoveMemberDomain = () => `${domain}/events/removemember`;

export const tagsDomain = () => `${domain}/tags`;
export const tagInfoDomain = id => `${domain}/tags/${id}`;
