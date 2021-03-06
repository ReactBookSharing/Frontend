import api from './api';

export function getProfiles(username){
    return api.get('profile/', {
        params: {
            username: username
        }
    });
}

export function createProfile(values){
    return api.post('profile/', values);
}

export function updateProfile(id, profile){
    return api.put(`profile/${id}/`, profile);
}

export function deleteProfile(profile){
    return api.delete(`profile/${profile.id}/`);
}

export function getProfilesFollowers(profile){
    return api.get(`profile/${profile.id}/followers/`);
}

export function getProfileFollowing(profile){
    return api.get(`profile/${profile.id}/following/`);
}

export function followProfile(yourProfile, anotherProfile){
    return api.post(`profile/${yourProfile.id}/follow/${anotherProfile.id}/`, {});
}

export function unfollowProfile(yourProfile, anotherProfile){
    return api.delete(`profile/${yourProfile.id}/follow/${anotherProfile.id}/`);
}

export function getOwnProfile() {
    return api.get('profile/own/');
}

export function getProfilesBooks(profile) {
    return api.get(`profile/${profile.id}/books/`);
}


export function editProfile(profile) {
    return api.pu(`profile/${profile}/`, profile);
}