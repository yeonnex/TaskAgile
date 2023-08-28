import RegisterPage from '@/views/RegisterPage.vue';
import {mount} from '@vue/test-utils';

describe('RegisterPage.vue', () => {
  let wrapper;
  let fieldUsername;
  let fieldEmailAddress;
  let fieldPassword;
  let buttonSubmit;

  beforeEach(() => {
    wrapper = mount(RegisterPage);

    fieldUsername = wrapper.find('#username');
    fieldEmailAddress = wrapper.find('#emailAddress');
    fieldPassword = wrapper.find('#password');
    buttonSubmit = wrapper.find('form button[type="submit"]');
  })

  it('should render registration form', () => {

    expect(fieldUsername.element.value).toEqual('');

    expect(fieldEmailAddress.element.value).toEqual('');

    expect(fieldPassword.element.value).toEqual('');

  })

})
