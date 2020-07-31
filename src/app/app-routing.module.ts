import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// pages
import { ExampleComponent } from './example/example.component'; 
// forms
import { InputsComponent } from './inputs/inputs.component'
import { FileSelectComponent } from './form-elements/file-select/file-select.component'
import { FormElementsComponent } from './form-elements/form-elements.component'
import { LoginComponent } from './login/login.component'; 
import { DecoupledLoginComponent } from './login/decoupled-login/decoupled-login.component'; 
import { ReactiveLoginComponent } from './login/reactive-login/reactive-login.component'
// elements
import { AppHeaderComponent } from './elements/app-header/app-header.component'
import { PagetitleBreadcrumbsComponent } from './elements/pagetitle-breadcrumbs/pagetitle-breadcrumbs.component';
import { ButtonsComponent } from './elements/buttons/buttons.component';
import { IconsComponent } from './elements/icons/icons.component';
import { StatsComponent } from './elements/stats/stats.component';
import { DropdownsComponent } from './elements/dropdowns/dropdowns.component';
import { StatusesComponent } from './elements/statuses/statuses.component';
import { SearchComponent } from './search/search.component';
//
import { ModalComponent } from './modal/modal.component';
//
import { AlertComponent } from './feedback/alert/alert.component'
// page layouts
import { CardsComponent } from './cards/cards.component';
import { NodesComponent } from './nodes/nodes.component';
import { NodeFlexComponent} from './node-flex/node-flex.component';
import { NodeRowComponent} from './node-row/node-row.component';
import { ListsComponent } from './lists/lists.component';
import { TableComponent } from './table/table.component';
import { LayoutsComponent } from './layouts/layouts.component';
// pages 
import { ExampleOneComponent } from './pages/example-one/example-one.component';
import { ExampleTwoComponent } from './pages/example-two/example-two.component';
import { ExampleThreeComponent } from './pages/example-three/example-three.component';
import { ExampleFourComponent } from './pages/example-four/example-four.component';
import { NgformComponent } from './pages/ngform/ngform.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
// product pages
import { PhComponent } from './product-examples/ph/ph.component';
// design-system
import { ColourPalleteComponent } from './design-system/colour-pallete/colour-pallete.component';
import { TypographyComponent } from './design-system/typography/typography.component';
import { ProductLogosComponent } from './design-system/product-logos/product-logos.component';
import { BrowserIconsComponent } from './design-system/browser-icons/browser-icons.component';
const routes: Routes = [
	{ 
		path: '', 
		component: ExampleComponent, 
		data: {} 
	},
	{ 
		path: 'inputs', 
		component: InputsComponent, 
		data: {} 
	},
	{
		path: 'file-select',
		component: FileSelectComponent,
	},
	{
		path: 'form-elements',
		component: FormElementsComponent,
	},
	{ 
		path: 'login', 
		component: LoginComponent, 
		data: {} 
	},
	{ 
		path: 'decoupled-login', 
		component: DecoupledLoginComponent, 
		data: {} 
	},
	{ path:'reactive-login', component: ReactiveLoginComponent},
	{
		path:'header',
		component: AppHeaderComponent,
	},
	{
		path:'title-breadcrumbs',
		component: PagetitleBreadcrumbsComponent,
	},
	{ 
		path: 'buttons', 
		component: ButtonsComponent, 
		data: {} 
	},
	{ 
		path: 'icons', 
		component: IconsComponent, 
		data: {} 
	},
	{ 
		path: 'stats', 
		component: StatsComponent, 
		data: {} 
	},
	{ 
		path: 'dropdowns', 
		component: DropdownsComponent, 
		data: {} 
	},
	{
		path: 'statuses',
		component: StatusesComponent,
	},
	{
		path: 'search',
		component: SearchComponent,
	},
	{ 
		path: 'modals', 
		component: ModalComponent, 
		data: {} 
	},
	{
		path: 'alerts',
		component: AlertComponent
	},
	{ 
		path: 'layouts', 
		component: LayoutsComponent, 
		data: {} 
	},
	
	{ 
		path: 'cards',
		component: CardsComponent,
		data: {}
	},
	{ 
		path: 'nodes',
		component: NodesComponent,
		data: {}
	},
	{ 
		path: 'node-flex',
		component: NodeFlexComponent,
		data: {}
	},
	{ 
		path: 'node-row',
		component: NodeRowComponent,
		data: {}
	},
	{ 
		path: 'lists',
		component: ListsComponent,
		data: {}
	},
	{ 
		path: 'tables',
		component: TableComponent,
		data: {}
	},
	{ 
		path: 'example-one',
		component: ExampleOneComponent,
		data: {}
	},
	{ 
		path: 'example-two',
		component: ExampleTwoComponent,
		data: {}
	},
	{ 
		path: 'example-three',
		component: ExampleThreeComponent,
		data: {}
	},
	{ 
		path: 'example-four',
		component: ExampleFourComponent,
		data: {}
	},
	{
		path: 'product-hub',
		component: PhComponent,
		data: {}
	},
	{ path: 'ngform', component: NgformComponent},
	{ path: 'reactive-form', component: ReactiveFormComponent},

	{ path: 'typography', component: TypographyComponent},
	{ path: 'colour-pallete', component: ColourPalleteComponent},
	{ path: 'product-logos', component: ProductLogosComponent},
	{ path: 'browser-icons', component: BrowserIconsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
