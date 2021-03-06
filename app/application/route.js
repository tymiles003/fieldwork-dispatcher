import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    let session = this.get('session');
    return session.fetch().then(() => {
      let user = session.content.currentUser;
      let email = user.email;
      let username = email.substring(0, email.indexOf('@'));
      user.username = username;
      this.set('currentUser.content', user);
    }).catch((error) => {
      if(error) {
        console.log("Error fetching session: " + error);
        this.transitionTo('login');
      }
    });

  }

});
