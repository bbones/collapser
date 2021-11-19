import { mount, createLocalVue } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import { BootstrapVue } from 'bootstrap-vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('HelloWorld.vue', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(HelloWorld, {
      localVue: localVue,
    })
  })

  it('renders visible collapse component', async () => {
    let openButton = wrapper.find("#open")
    let collapsible = wrapper.find("#my-collapse")
    console.log(collapsible.element.style);
    console.log(collapsible.isVisible());

    await openButton.trigger("click");

    console.log(collapsible.element.style);
    console.log(collapsible.isVisible());
  })
})
