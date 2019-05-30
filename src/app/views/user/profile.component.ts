import { Component } from '@angular/core'

@Component({
  template: `
  <header id="home-header">
    <div class="container" fxLayout="row" fxLayoutWrap="wrap" fxLayoutAlign="start center">
        <div class="header-mobile-top" fxLayout="row" fxLayoutWrap="wrap" fxLayoutAlign="start center">
        <div class="home-logo mr-1">
            <a href="/"><img src="assets/images/logo-full.png" alt="Egret logo"></a>
        </div>     
        </div>
    </div>
</header>
<h1>Edit Your Profile</h1>
<hr>
<div class="col-md-6">
    <h3>[Edit profile form will go here]</h3>
    <br />
    <br />
    <button type="submit" class="btn btn-primary">Save</button>
    <button type="button" class="btn btn-default">Cancel</button>
</div>
  `,
})
export class ProfileComponent {
       
}