import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  async onSubmit() {
    this.submitted = true;
  
    if (this.contactForm.valid) {
      this.isSubmitting = true;
  
      try {
        // Get the name and message values
        const name = this.contactForm.value.name;
        let message = this.contactForm.value.message;
  
        // Append the name to the message
        message = `Name: ${name}\n\nMessage:\n${message}`;
  
        // Send the modified message along with the email
        const response = await fetch('https://formspree.io/f/mnnnkvjn', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.contactForm.value.email,
            message: message
          })
        });
  
        if (response.ok) {
          alert('Message sent successfully!');
          this.contactForm.reset();
          this.submitted = false;
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        alert('Failed to send message. Please try again later.');
      } finally {
        this.isSubmitting = false;
      }
    }
  }  
}