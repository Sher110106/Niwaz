import { Cart } from 'lib/shopify/types';

export function generateWhatsAppMessage(cart: Cart | null, productTitle?: string): string {
  const baseMessage = "Hi! I'd like to place an order";
  
  if (productTitle) {
    // Single product order
    return `${baseMessage} for: *${productTitle}*. Can you help me with this?`;
  }
  
  if (cart && cart.lines && cart.lines.length > 0) {
    // Cart order with items
    const items = cart.lines.map(line => {
      const productTitle = line.merchandise?.product?.title || 'Unknown Product';
      const quantity = line.quantity || 1;
      const price = line.merchandise?.price?.amount || '0';
      const currency = line.merchandise?.price?.currencyCode || 'USD';
      
      return `• *${productTitle}* (Qty: ${quantity}) - ${currency} ${price}`;
    }).join('\n');
    
    const totalAmount = cart.cost?.totalAmount?.amount || '0';
    const currency = cart.cost?.totalAmount?.currencyCode || 'USD';
    
    return `${baseMessage} for the following items:\n\n${items}\n\n*Total: ${currency} ${totalAmount}*\n\nPlease help me complete this order.`;
  }
  
  // Fallback for empty cart
  return `${baseMessage}. Can you help me?`;
}

export function generateWhatsAppUrl(cart: Cart | null, productTitle?: string): string {
  const message = generateWhatsAppMessage(cart, productTitle);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/918708491362?text=${encodedMessage}`;
}
