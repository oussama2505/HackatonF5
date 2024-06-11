import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Header', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.exists()).toBe(true);
  });
});
