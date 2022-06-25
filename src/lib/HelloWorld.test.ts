import { render, screen } from '@testing-library/svelte'
import HelloWorld from './HelloWorld.svelte'

test('renders greeting', () => {
  render(HelloWorld)
  expect(screen.getByText(/welcome to sveltekit/i)).toBeInTheDocument()
})
