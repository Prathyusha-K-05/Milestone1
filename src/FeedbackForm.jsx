// FeedbackForm.js
import React, { useState } from 'react';
import './FeedbackForm.css';
import { Link } from 'react-router-dom';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    overallExperience: 0,
    recommend: 0,
    easeOfFindingItems: 0,
    navigationEase: 0,
    orderingSpeed: 0,
    dietaryInfo: '',
    orderingIssues: '',
    orderingIssuesDetails: '',
    menuVariety: 0,
    productDescriptions: 0,
    missingProducts: '',
    checkoutEase: 0,
    paymentIssues: '',
    paymentIssuesDetails: '',
    paymentSatisfaction: 0,
    deliveryOptions: 0,
    orderTimeliness: '',
    foodCondition: 0,
    foodQuality: 0,
    foodPackaging: '',
    portionSize: 0,
    contactSupport: '',
    supportSatisfaction: 0,
    issueResolved: '',
    usefulFeatures: '',
    featureSuggestions: '',
    additionalComments: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRatingChange = (field, rating) => {
    setFormData((prevData) => ({ ...prevData, [field]: rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Feedback:", formData);
    alert("Thank you for your feedback!");
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h2>Feedback Form</h2>

      {/* Overall Experience */}
      <h3>1. Overall Experience</h3>
      <p>How satisfied are you with your overall experience on our website?</p>
      <StarRating rating={formData.overallExperience} onRatingChange={(rating) => handleRatingChange('overallExperience', rating)} />
      
      <p>How likely are you to recommend our website to others?</p>
      <StarRating rating={formData.recommend} onRatingChange={(rating) => handleRatingChange('recommend', rating)} />

      <p>How easy was it to find the items you were looking for?</p>
      <StarRating rating={formData.easeOfFindingItems} onRatingChange={(rating) => handleRatingChange('easeOfFindingItems', rating)} />

      {/* Ordering Process */}
      <h3>2. Ordering Process</h3>
      <p>How easy was it to navigate the website?</p>
      <StarRating rating={formData.navigationEase} onRatingChange={(rating) => handleRatingChange('navigationEase', rating)} />

      <p>How satisfied are you with the speed of the ordering process?</p>
      <StarRating rating={formData.orderingSpeed} onRatingChange={(rating) => handleRatingChange('orderingSpeed', rating)} />

      <p>Were you able to easily find dietary or allergen information?</p>
      <YesNoOption name="dietaryInfo" value={formData.dietaryInfo} onChange={handleInputChange} />

      <p>Did you encounter any issues during the ordering process?</p>
      <YesNoOption name="orderingIssues" value={formData.orderingIssues} onChange={handleInputChange} />
      {formData.orderingIssues === 'Yes' && (
        <textarea name="orderingIssuesDetails" placeholder="Please describe the issue" value={formData.orderingIssuesDetails} onChange={handleInputChange} />
      )}

      {/* Product Selection */}
      <h3>3. Product Selection and Menu</h3>
      <p>How satisfied are you with the variety of menu options available?</p>
      <StarRating rating={formData.menuVariety} onRatingChange={(rating) => handleRatingChange('menuVariety', rating)} />

      <p>How satisfied are you with the product descriptions and images?</p>
      <StarRating rating={formData.productDescriptions} onRatingChange={(rating) => handleRatingChange('productDescriptions', rating)} />

      <p>Were any products or categories missing that you expected?</p>
      <textarea name="missingProducts" placeholder="Specify any missing items" value={formData.missingProducts} onChange={handleInputChange} />

      {/* Checkout and Payment */}
      <h3>4. Checkout and Payment</h3>
      <p>How easy was it to complete the checkout process?</p>
      <StarRating rating={formData.checkoutEase} onRatingChange={(rating) => handleRatingChange('checkoutEase', rating)} />

      <p>Did you experience any issues with payment options?</p>
      <YesNoOption name="paymentIssues" value={formData.paymentIssues} onChange={handleInputChange} />
      {formData.paymentIssues === 'Yes' && (
        <textarea name="paymentIssuesDetails" placeholder="Please describe the issue" value={formData.paymentIssuesDetails} onChange={handleInputChange} />
      )}

      <p>Were you satisfied with the available payment options?</p>
      <StarRating rating={formData.paymentSatisfaction} onRatingChange={(rating) => handleRatingChange('paymentSatisfaction', rating)} />

      {/* Delivery and Timeliness */}
      <h3>5. Delivery and Timeliness</h3>
      <p>How satisfied were you with the delivery options?</p>
      <StarRating rating={formData.deliveryOptions} onRatingChange={(rating) => handleRatingChange('deliveryOptions', rating)} />

      <p>Did your order arrive on time?</p>
      <YesNoOption name="orderTimeliness" value={formData.orderTimeliness} onChange={handleInputChange} />

      <p>How satisfied are you with the condition of the food upon delivery?</p>
      <StarRating rating={formData.foodCondition} onRatingChange={(rating) => handleRatingChange('foodCondition', rating)} />

      {/* Quality of Food */}
      <h3>6. Quality of Food</h3>
      <p>How satisfied are you with the quality of the food?</p>
      <StarRating rating={formData.foodQuality} onRatingChange={(rating) => handleRatingChange('foodQuality', rating)} />

      <p>Was the food packaged well and delivered at the correct temperature?</p>
      <YesNoOption name="foodPackaging" value={formData.foodPackaging} onChange={handleInputChange} />

      <p>Was the portion size satisfactory?</p>
      <StarRating rating={formData.portionSize} onRatingChange={(rating) => handleRatingChange('portionSize', rating)} />

      {/* Customer Support */}
      <h3>7. Customer Support</h3>
      <p>Did you need to contact customer support?</p>
      <YesNoOption name="contactSupport" value={formData.contactSupport} onChange={handleInputChange} />

      <p>How satisfied are you with the support you received?</p>
      <StarRating rating={formData.supportSatisfaction} onRatingChange={(rating) => handleRatingChange('supportSatisfaction', rating)} />

      <p>Was the issue resolved to your satisfaction?</p>
      <YesNoOption name="issueResolved" value={formData.issueResolved} onChange={handleInputChange} />

      {/* Website and App Features */}
      <h3>8. Website and App Features</h3>
      <p>Were there any features you found particularly useful or frustrating?</p>
      <textarea name="usefulFeatures" placeholder="Describe any features" value={formData.usefulFeatures} onChange={handleInputChange} />

      <p>Is there a feature or improvement you would like to see on our website?</p>
      <textarea name="featureSuggestions" placeholder="Describe any improvements" value={formData.featureSuggestions} onChange={handleInputChange} />

      {/* Open Feedback */}
      <h3>9. Open Feedback</h3>
      <p>Do you have any additional comments or suggestions to help us improve?</p>
      <textarea name="additionalComments" placeholder="Your feedback" value={formData.additionalComments} onChange={handleInputChange} />
       <Link to="/Home"><button type="submit">Submit Feedback</button></Link>
      
    </form>
  );
};

// Components for Star Rating and Yes/No Options
const StarRating = ({ rating, onRatingChange }) => (
  <div className="star-rating">
    {[1, 2, 3, 4, 5].map((star) => (
      <span key={star} className={`star ${star <= rating ? 'filled' : ''}`} onClick={() => onRatingChange(star)}>
        ★
      </span>
    ))}
  </div>
);

const YesNoOption = ({ name, value, onChange }) => (
  <div>
    <label>
      <input type="radio" name={name} value="Yes" checked={value === 'Yes'} onChange={onChange} /> Yes
    </label>
    <label>
      <input type="radio" name={name} value="No" checked={value === 'No'} onChange={onChange} /> No
    </label>
  </div>
);

export default FeedbackForm;
