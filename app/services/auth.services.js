"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_1 = require("angularfire2/auth");
var firebase = require("firebase/app");
var AuthService = (function () {
    function AuthService(firebaseAuth) {
        this.firebaseAuth = firebaseAuth;
        this.user = firebaseAuth.authState;
    }
    AuthService.prototype.confirmEmail = function () {
        var user = firebase.auth().currentUser;
        user.sendEmailVerification()
            .then(function () { console.log('email send'); })
            .catch(function (err) { console.log(err, 'error'); });
    };
    AuthService.prototype.resetPassword = function (email) {
        var auth = firebase.auth();
        return auth.sendPasswordResetEmail(email)
            .then(function () {
            console.log('email sent');
        })
            .catch(function (err) {
            console.log(err, 'couldnt send email');
        });
    };
    AuthService.prototype.signup = function (email, password, firstname, lastname) {
        var _this = this;
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Success!', value, value.uid);
            _this.confirmEmail();
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
    };
    AuthService.prototype.facebookLogin = function () {
        this.firebaseAuth.auth
            .signInWithPopup(new firebase.auth.FacebookAuthProvider)
            .then(function (res) {
            console.log(res);
        });
    };
    AuthService.prototype.googleLogin = function () {
        this.firebaseAuth.auth
            .signInWithPopup(new firebase.auth.GoogleAuthProvider)
            .then(function (res) {
            console.log(res);
        });
    };
    AuthService.prototype.twitterLogin = function () {
        this.firebaseAuth.auth
            .signInWithPopup(new firebase.auth.TwitterAuthProvider)
            .then(function (res) {
            console.log(res);
        });
    };
    AuthService.prototype.login = function (email, password) {
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Nice, it worked!');
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
    };
    AuthService.prototype.logout = function () {
        this.firebaseAuth
            .auth
            .signOut();
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_1.AngularFireAuth])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGguc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsMENBQW9EO0FBQ3BELHVDQUF5QztBQUl6QyxJQUFhLFdBQVc7SUFJdEIscUJBQ1UsWUFBNkI7UUFBN0IsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBRXJDLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsa0NBQVksR0FBWjtRQUNFLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFFdkMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO2FBQ3pCLElBQUksQ0FBQyxjQUFRLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7YUFDekMsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVELG1DQUFhLEdBQWIsVUFBYyxLQUFhO1FBQ3pCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQzthQUN0QyxJQUFJLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzNCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxvQkFBb0IsQ0FBQyxDQUFBO1FBQ3hDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxTQUFpQixFQUFFLFFBQWdCO1FBQTNFLGlCQVlDO1FBWEMsSUFBSSxDQUFDLFlBQVk7YUFDZCxJQUFJO2FBQ0osOEJBQThCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQzthQUMvQyxJQUFJLENBQUMsVUFBQSxLQUFLO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUk7YUFDbkIsZUFBZSxDQUFDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQzthQUN2RCxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxpQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJO2FBQ25CLGVBQWUsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7YUFDckQsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0NBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSTthQUNuQixlQUFlLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2FBQ3RELElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxLQUFhLEVBQUUsUUFBZ0I7UUFDbkMsSUFBSSxDQUFDLFlBQVk7YUFDZCxJQUFJO2FBQ0osMEJBQTBCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQzthQUMzQyxJQUFJLENBQUMsVUFBQSxLQUFLO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw0QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFlBQVk7YUFDZCxJQUFJO2FBQ0osT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUgsa0JBQUM7QUFBRCxDQUFDLEFBckZELElBcUZDO0FBckZZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FNYSxzQkFBZTtHQUw1QixXQUFXLENBcUZ2QjtBQXJGWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVBdXRoIH0gZnJvbSAnYW5ndWxhcmZpcmUyL2F1dGgnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICB1c2VyOiBPYnNlcnZhYmxlPGZpcmViYXNlLlVzZXI+O1xuICB1c2VyS2V5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmaXJlYmFzZUF1dGg6IEFuZ3VsYXJGaXJlQXV0aCxcbiAgKSB7XG4gICAgdGhpcy51c2VyID0gZmlyZWJhc2VBdXRoLmF1dGhTdGF0ZTtcbiAgfVxuXG4gIGNvbmZpcm1FbWFpbCgpIHtcbiAgICBsZXQgdXNlciA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlcjtcblxuICAgIHVzZXIuc2VuZEVtYWlsVmVyaWZpY2F0aW9uKClcbiAgICAgIC50aGVuKCgpID0+IHsgY29uc29sZS5sb2coJ2VtYWlsIHNlbmQnKSB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHsgY29uc29sZS5sb2coZXJyLCAnZXJyb3InKSB9KVxuICB9XG5cbiAgcmVzZXRQYXNzd29yZChlbWFpbDogc3RyaW5nKSB7XG4gICAgbGV0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XG4gICAgcmV0dXJuIGF1dGguc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2VtYWlsIHNlbnQnKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVyciwgJ2NvdWxkbnQgc2VuZCBlbWFpbCcpXG4gICAgICB9KVxuICB9XG5cbiAgc2lnbnVwKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGZpcnN0bmFtZTogc3RyaW5nLCBsYXN0bmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5maXJlYmFzZUF1dGhcbiAgICAgIC5hdXRoXG4gICAgICAuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgIC50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3MhJywgdmFsdWUsIHZhbHVlLnVpZCk7XG4gICAgICAgIHRoaXMuY29uZmlybUVtYWlsKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTb21ldGhpbmcgd2VudCB3cm9uZzonLCBlcnIubWVzc2FnZSk7XG4gICAgICB9KTtcblxuICB9XG5cbiAgZmFjZWJvb2tMb2dpbigpIHtcbiAgICB0aGlzLmZpcmViYXNlQXV0aC5hdXRoXG4gICAgICAuc2lnbkluV2l0aFBvcHVwKG5ldyBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ29vZ2xlTG9naW4oKSB7XG4gICAgdGhpcy5maXJlYmFzZUF1dGguYXV0aFxuICAgICAgLnNpZ25JbldpdGhQb3B1cChuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgfSk7XG4gIH1cblxuICB0d2l0dGVyTG9naW4oKTogdm9pZCB7XG4gICAgdGhpcy5maXJlYmFzZUF1dGguYXV0aFxuICAgICAgLnNpZ25JbldpdGhQb3B1cChuZXcgZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgfSk7XG4gIH1cblxuICBsb2dpbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgdGhpcy5maXJlYmFzZUF1dGhcbiAgICAgIC5hdXRoXG4gICAgICAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgICAgLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnTmljZSwgaXQgd29ya2VkIScpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnU29tZXRoaW5nIHdlbnQgd3Jvbmc6JywgZXJyLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgdGhpcy5maXJlYmFzZUF1dGhcbiAgICAgIC5hdXRoXG4gICAgICAuc2lnbk91dCgpO1xuICB9XG5cbn0iXX0=