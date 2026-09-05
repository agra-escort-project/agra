export const WHATSAPP_NUMBER = '919105293429';

type WhatsAppContext = {
  modelName?: string;
  locationName?: string;
  source?: 'contact' | 'gallery_profile' | 'global_fab' | 'location_page' | 'mobile_nav' | 'floating_contact' | 'faq' | 'model_card' | 'general';
};

export function getWhatsAppLink(context?: WhatsAppContext): string {
  const number = WHATSAPP_NUMBER;
  let text = 'Hello team, I am looking to book a high-end model in Agra. Could you please share the available profiles and rates?'; // default

  if (context?.modelName) {
    if (context.source === 'model_card') {
      text = `Hello AgraEscort! I saw ${context.modelName}'s profile on the model card and I'd like to book her. Is she available today?`;
    } else if (context.source === 'gallery_profile') {
      text = `Hi team, I am viewing ${context.modelName}'s full gallery profile. Could you please confirm her current availability and rates?`;
    } else {
      text = `Hello, I am interested in booking ${context.modelName}. Please share her availability.`;
    }
  } else if (context?.locationName) {
    text = `Hello team, I am currently looking for fresh call girls in ${context.locationName}. Could you please share the latest available profiles near this location?`;
  } else {
    // Unique messages based on UI source
    switch (context?.source) {
      case 'contact':
        text = 'Hello team, I am reaching out from your Contact page. I am looking to book a high-end model. Please share the available profiles and rates.';
        break;
      case 'global_fab':
        text = 'Hi! I am browsing your website and want to quickly check out the VIP models available right now.';
        break;
      case 'mobile_nav':
        text = 'Hello, I am using your mobile site and want to make a quick booking. What profiles are available in Agra today?';
        break;
      case 'floating_contact':
        text = 'Hi team, I am interested in your premium services. Could you send me the latest escort profiles and booking process?';
        break;
      case 'faq':
        text = 'Hello, I was reading your FAQ section and have a few more questions about the booking process. Can you help?';
        break;
      default:
        text = 'Hello team, I am looking to book a high-end model in Agra. Could you please share the available profiles and rates?';
        break;
    }
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
