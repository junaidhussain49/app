import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { FormBuilder, FormGroup, FormArray,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   
  dynamicForm:FormGroup;
  submitted= false;
  p=['COD','paypal'];
  

  constructor(private fb: FormBuilder) { 
    this.dynamicForm = this.fb.group({
      name: '',
      shipping:'' ,
      payment:'',
      ddate:'',
      sites:'',
      duedate:'',
      status:'',
      woNumber:'',
      item:this.fb.array([]),

    });
    
  }
  
  items() : FormArray {
    return this.dynamicForm.get("items") as FormArray


  }

  newItem(): FormGroup {
    return this.fb.group({
      items:'',
      qty: '',
      price: '',
      amount:'',
      
    })
  }
  addItem() {
    this.items().push(this.newItem());
  }
   
  removeItem(i:number) {
    this.items().removeAt(i);
  }

  ngOnInit() {
    this.dynamicForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
         
      ]),
      
    });
  
  

  }

  
  

  onSubmit(){
    this.submitted = true;

        // stop here if form is invalid
        if (this.dynamicForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n');
    }
  }

