"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var proposal_1 = require("./proposal");
var proposal_service_1 = require("./proposal.service");
var ProposalNewComponent = (function () {
    function ProposalNewComponent(proposalService) {
        this.proposalService = proposalService;
        this.proposal = new proposal_1.Proposal;
        this.submitted = false;
    }
    ProposalNewComponent.prototype.createProposal = function (proposal) {
        var _this = this;
        this.submitted = true;
        this.proposalService.createProposal(proposal)
            .subscribe(function (data) { return true; }, function (error) {
            console.log("Error saving proposal");
            _this.submitted = false;
            return Rx_1.Observable.throw(error);
        });
    };
    return ProposalNewComponent;
}());
ProposalNewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'proposal-new',
        templateUrl: 'proposal-new.component.html',
        styleUrls: ['proposal-new.component.css'],
        providers: [proposal_service_1.ProposalService]
    }),
    __metadata("design:paramtypes", [proposal_service_1.ProposalService])
], ProposalNewComponent);
exports.ProposalNewComponent = ProposalNewComponent;
//# sourceMappingURL=proposal-new.component.js.map