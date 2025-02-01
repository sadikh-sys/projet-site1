import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { OrderForm } from '../OrderForm';

describe('OrderForm', () => {
  it('renders the form correctly', () => {
    render(<OrderForm />);
    
    expect(screen.getByText('Commander')).toBeInTheDocument();
    expect(screen.getByLabelText('Choisissez votre plat')).toBeInTheDocument();
    expect(screen.getByLabelText('Bâtiment')).toBeInTheDocument();
    expect(screen.getByLabelText('Numéro de chambre')).toBeInTheDocument();
    expect(screen.getByLabelText('Nombre de portions')).toBeInTheDocument();
  });

  it('handles payment method selection', () => {
    render(<OrderForm />);
    
    const waveRadio = screen.getByLabelText('Wave');
    fireEvent.click(waveRadio);
    
    expect(screen.getByText(/Veuillez envoyer le montant à ce numéro/)).toBeInTheDocument();
    expect(screen.getByText(/76 156 59 89/)).toBeInTheDocument();
  });

  it('validates required fields', () => {
    render(<OrderForm />);
    
    const submitButton = screen.getByText('Commander');
    fireEvent.click(submitButton);
    
    // The form should not submit with empty required fields
    expect(screen.getByLabelText('Choisissez votre plat')).toBeInvalid();
    expect(screen.getByLabelText('Bâtiment')).toBeInvalid();
    expect(screen.getByLabelText('Numéro de chambre')).toBeInvalid();
  });
});