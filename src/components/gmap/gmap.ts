import {Component, OnInit, AfterViewInit, Input, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Companies} from "../../pages/companies/companies";
import {CompaniesHandlerService} from "../../services/companies-handler.service";
import {CompanyService} from "../../services/company.service";

declare var jQuery: any;
declare var google: any;

@Component({
    selector: 'gmap-component',
    templateUrl: 'src/components/gmap/gmap.html',
})

export class GmapComponent implements OnInit, AfterViewInit,OnDestroy {
    @Input() compamies: Companies[];
    @Input() isShow: boolean;
    // compamies: Companies[];
    private overlays: any[];
    private mapOverlays: any[];
    private partnerSub: Subscription;
    private specOfferSub: Subscription;
    private options: any;


    constructor(private companiesHandlerService: CompaniesHandlerService,
                private companyService: CompanyService) {

    }

    ngOnInit() {
        this.isShow = this.isShow ? this.isShow : true;
        console.log('GMAP');
        console.log(this.compamies);
        // this.compamies = this.companyService.initCompanies();

        /* this.partnerSub = this.companiesHandlerService.navItem$.subscribe(
         item => {
         console.log('Taken from partner.component:');
         console.log(item);
         this.compamies = item;
         // this.initOverlays(this.compamies);
         });*/
        // this.initOverlays(this.compamies);
        /*
         this.specOfferSub = this.specOfferHandlerService.navItem$.subscribe(
         item => {
         console.log(item)
         this.specOffers = item;
         this.initOverlays(this.specOffers, null);
         });

         console.log('partnersFromGmap:');
         console.log(this.partners);*/


        /**
         * Поле, отвечающее за центровку гугл мапы и за размер зума
         * @type {{center: {lat: number, lng: number}, zoom: number}}
         */
        this.options = {
            center: {lat: 50.4501, lng: 30.5234},
            zoom: 12
        };

        this.initOverlays(this.compamies);
    }

    ngOnDestroy(): void {
        this.partnerSub.unsubscribe();
    }

    initOverlays(companies: Companies[]) {
        console.log('InitOverlays!');
        this.mapOverlays = [new google.maps.Marker({
            position: {lat: 1, lng: 1},
            title: "For Init"
        })
        ];

        if (companies) {
            console.log('Taken from initOverLaysPartner:');
            console.log(companies);
            companies.forEach((company: Companies)=> {
                this.mapOverlays.push(new google.maps.Marker({
                    position: {lat: company.lat, lng: company.lng},
                    title: company.description
                }))
            });
            console.log('INIT OVERLAYS');
            console.log(this.mapOverlays);
        }
        // else if (offers) {
        //     console.log('Taken from initOverLays Offers:');
        //     console.log(offers);
        //     offers.forEach((offer: SpecOffer)=> {
        //         this.mapOverlays.push(new google.maps.Marker({
        //             position: {lat: offer.lat, lng: offer.lng},
        //             title: offer.name
        //         }))
        //     });
        // }

        this.overlays = this.mapOverlays;
    }

    ngAfterViewInit() {

    }

}