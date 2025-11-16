---
icon: fas fa-stream
layout: custom-general
order: 1
visible: false
title: "Grievance Form"
permalink: /grievance/
---

<p>
We understand that sometimes you may face challenges - academic, interpersonal, or otherwise.  
This space is meant to <b>listen and help</b>. You can use this form to share a concern, suggestion, or grievance with the CS Department Representatives.  
Your message will remain <b>private and confidential</b>.
</p>

<form action="https://formsubmit.co/1db5adba468d3feac55d0cd3658e1947" method="POST" class="grievance-form">

  <!-- Hidden configuration -->
  <input type="hidden" name="_subject" value="New CS Department Grievance">
  <input type="hidden" name="_captcha" value="false">
  <input type="hidden" name="_template" value="table">
  <input type="hidden" name="_next" value="https://csrep.github.io/thanks/">

  <fieldset class="form-section">
    <legend>About You (optional)</legend>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="You may leave this blank if you wish to remain anonymous" class="form-control">
  </fieldset>

  <fieldset class="form-section">
    <legend>About the Grievance</legend>

    <label for="category">Category:</label>
    <select id="category" name="category" class="form-control">
      <option value="Academic">Academic</option>
      <option value="Faculty">Faculty</option>
      <option value="Teaching Fellow(s)">Teaching Fellow(s)</option>
      <option value="Teaching Assistant(s)">Teaching Assistant(s)</option>
      <option value="Infrastructure">Infrastructure</option>
      <option value="Peer or Student">Peer / Student</option>
      <option value="Other">Other</option>
    </select>

    <label for="message">Describe your concern:</label>
    <textarea id="message" name="message" rows="6" required class="form-control" placeholder="Please share what happened or what you'd like us to know...">
    </textarea>
  </fieldset>
<fieldset class="form-section">
  <legend>Preferred Action for Your Concern</legend>
  <p class="note">
    This helps us understand how you would like your grievance or concern to be addressed. 
    Please select the option that best reflects your preference.
  </p>

  <label class="radio-option">
    <input type="radio" name="action_preference" value="Just to Share" checked>
    Just to share – I want someone to acknowledge my concern.
  </label>

  <label class="radio-option">
    <input type="radio" name="action_preference" value="Seek Support or Resolution">
    Seek support or resolution – I would like assistance in addressing this concern. 
    <span style="display:block; font-size: 0.85rem; color: #555; margin-left: 1.5rem; margin-top: 0.2rem;">
      For example, I may need accommodation, guidance, or informal help. 
    </span>
  </label>

  <label class="radio-option">
    <input type="radio" name="action_preference" value="Moderation or Action">
    Active moderation or action – I wish to formally raise this with a committee or designated authority.
  </label>

  <p class="note" style="font-size: 0.85rem; color: #969e9e; margin-top: 0.5rem;">
    If you wish for us to follow up with you, please provide a contact method below so we can respond appropriately.
  </p>
</fieldset>


  <fieldset class="form-section">
    <legend>Additional Notes (optional)</legend>
    <textarea name="notes" rows="3" class="form-control" placeholder="Any context, suggestions, or next steps you’d like to mention..."></textarea>
  </fieldset>

  <div class="submit-container">
    <button type="submit" class="submit-btn">Submit Grievance</button>
    <p class="fine-print">Your message is sent privately to <strong>cs.reps@ashoka.edu.in</strong>.</p>
  </div>

</form>

<style>
/* ---------------- DARK MODE (DEFAULT — no data-mode attr) ---------------- */
.grievance-form {
  margin-top: 2rem;
  background: #1e1e1e;
  padding: 1.8rem;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(255,255,255,0.05);
  color: #e6e6e6;
}

.form-section {
  border: none;
  margin-bottom: 1.5rem;
}

legend {
  font-weight: 600;
  color: #e6e6e6;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

label {
  display: block;
  margin: 0.5rem 0 0.3rem;
  font-weight: 500;
  color: #e6e6e6;
}

.form-control {
  width: 100%;
  padding: 0.65rem;
  border: 1px solid #555;
  border-radius: 6px;
  font-size: 1rem;
  background: #2a2a2a;
  color: #f2f2f2;
}

textarea.form-control {
  resize: vertical;
}

.radio-option {
  display: block;
  margin: 0.3rem 0;
  font-size: 0.95rem;
  color: #e6e6e6;
}

.radio-option input {
  margin-right: 0.4rem;
}

.note {
  color: #aaa;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}

.submit-container {
  text-align: center;
}

.submit-btn {
  background-color: #e6e6e6;
  color: #1e1e1e;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

.submit-btn:hover {
  background-color: #cfcfcf;
}

.fine-print {
  font-size: 0.85rem;
  color: #aaa;
  margin-top: 0.6rem;
}

input:focus,
textarea:focus, .form-control:focus {
  background-color: #2a2a2a;  /* Dark background when active */
  color: #f2f2f2;             /* Light text for contrast */
  border-color: #555;          /* Darker border for emphasis */
  outline: none;               /* Remove default outline */
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.2);
}

/* ---------------- LIGHT MODE ---------------- */
html[data-mode="light"] .grievance-form {
  background: #f9f9fb;
  color: #222;
  box-shadow: 0 0 8px rgba(0,0,0,0.05);
}

html[data-mode="light"] legend,
html[data-mode="light"] label,
html[data-mode="light"] .radio-option {
  color: #222;
}

html[data-mode="light"] .form-control {
  background: white;
  border: 1px solid #ccc;
  color: #222;
}

html[data-mode="light"] .note,
html[data-mode="light"] .fine-print {
  color: #666;
}

html[data-mode="light"] .submit-btn {
  background-color: #2b2b2b;
  color: white;
}

html[data-mode="light"] .submit-btn:hover {
  background-color: #444;
}

html[data-mode="light"] input:focus,
textarea:focus, .form-control:focus {
  background-color: #fff;      /* Light background by default */
  color: #222;                 /* Text color */
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0.6rem;
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
}

</style>
