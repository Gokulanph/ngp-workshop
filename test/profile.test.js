// test/profile.test.js
const { loadProfile } = require('../js/profile');
const { JSDOM } = require('jsdom');

describe('Profile Page', () => {
    let dom;
    
    beforeEach(() => {
        dom = new JSDOM(`
            <!DOCTYPE html>
            <div id="name"></div>
            <div id="title"></div>
            <div id="bio"></div>
            <div id="location"></div>
            <div id="email"></div>
            <img id="profile-image" src="" />
        `);
        global.document = dom.window.document;
    });

    test('loads profile data correctly', () => {
        const testConfig = {
            name: 'John Doe',
            title: 'Software Engineer',
            bio: 'Passionate about coding',
            location: 'New York',
            email: 'john@example.com',
            image: 'test.jpg'
        };

        loadProfile(testConfig);

        expect(document.getElementById('name').textContent).toBe(testConfig.name);
        expect(document.getElementById('title').textContent).toBe(testConfig.title);
        expect(document.getElementById('bio').textContent).toBe(testConfig.bio);
        expect(document.getElementById('location').textContent).toBe(testConfig.location);
        expect(document.getElementById('email').textContent).toBe(testConfig.email);
        expect(document.getElementById('profile-image').src).toContain(testConfig.image);
    });
});