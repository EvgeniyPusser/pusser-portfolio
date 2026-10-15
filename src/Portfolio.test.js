import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.history.replaceState({}, '', '/');
  window.scrollTo = jest.fn();
});

test('visitors can reach the working calculator and research from the home page', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'Open the calculator ↗' })).toHaveAttribute('href', '/tools/thermal/index.html');
  fireEvent.click(screen.getByRole('link', { name: 'Explore both papers ↗' }));
  expect(screen.getByRole('heading', { name: /Can technical systems/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Read manuscript · PDF/i })).toHaveAttribute('href', '/papers/source-selection-null-result.pdf');
});

test('current projects distinguish a running simulation from the server-based logistics prototype', () => {
  window.history.replaceState({}, '', '/work');
  render(<App />);
  expect(screen.getByRole('link', { name: /Open English calculator/i })).toHaveAttribute('href', '/tools/thermal/index.html');
  expect(screen.getByRole('link', { name: /View project & setup/i })).toHaveAttribute('href', 'https://github.com/EvgeniyPusser/ai-truck-helper');
  expect(screen.getByText(/frontend and backend, with local setup/i)).toBeInTheDocument();
});

test('mobile navigation closes on a page change and exposes the original track record', () => {
  render(<App />);
  const menu = screen.getByRole('button', { name: 'Toggle navigation' });
  fireEvent.click(menu);
  expect(menu).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('button', { name: 'Track Record' }));
  expect(screen.getByRole('button', { name: 'Track Record' })).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', { name: 'Development' }));
  expect(menu).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByRole('heading', { name: /Developer Projects/ })).toBeInTheDocument();
});

test('every page exposes professional contact links without claiming completed degrees', () => {
  window.history.replaceState({}, '', '/about');
  render(<App />);
  expect(screen.getByText(/currently studying Computer Science/)).toBeInTheDocument();
  const footer = within(screen.getByRole('contentinfo'));
  expect(footer.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/evgenii-bogomazov-pusser/');
  expect(footer.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/EvgeniyPusser');
});
