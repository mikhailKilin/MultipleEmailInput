/* tslint:disable:max-line-length */
module inputEmail {
  export var html = '		<div class =\'email-container\'			 ng-click="ctrl.setInputFocus($event)"			 ng-mouseleave="ctrl.addEmail(ctrl.emailString)">			<div ng-repeat="email in ctrl.emails track by $index">				<div class="email-div">					<div class="{{email.isValid ? \'email-name\' : \'email-name invalid\'}}">						<div class="email-under-div">{{email.name}}</div>					</div>					<div ng-click="ctrl.deleteEmailString(email.order)" class="close-button">&#10060</div>				</div>			</div>			<input id="inputFocus"					type="text" 				   	class="email-string" 				   	ng-model="ctrl.emailString" 				   	ng-keyup="ctrl.addEmailWithEvent($event)" 				   	placeholder="add more people..."/>        </div>';
}
