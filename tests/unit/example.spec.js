import {mount, createLocalVue, createWrapper} from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import {BootstrapVue, VBToggle} from 'bootstrap-vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);


describe('HelloWorld.vue', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(HelloWorld, {
            localVue: localVue,
            global: {
                directives: {
                    VBToggle
                }
            }
        })
    })

    it.skip("listens to root toggle event", async () => {
        let collapsible = wrapper.find("#my-collapse")
        expect(collapsible.isVisible()).toBeTruthy();

        await wrapper.vm.$root.$emit('bv::toggle::collapse', 'my-collapse')
        expect(collapsible.isVisible()).toBeFalsy();

        await wrapper.vm.$root.$emit('bv::toggle::collapse', 'my-collapse')
        expect(collapsible.isVisible()).toBeTruthy();

    });

    it('renders visible collapse component', async () => {
        const rootWrapper = createWrapper(wrapper.vm.$root)
        let openButton = wrapper.find("#open")
        let collapsible = wrapper.find("#my-collapse")

        expect(collapsible.isVisible()).toBeTruthy();

        await openButton.trigger("click");

        console.log(rootWrapper.emitted())

        expect(collapsible.isVisible()).toBeFalsy();

    })
})
