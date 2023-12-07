require "test_helper"

class MotorbikesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get motorbikes_show_url
    assert_response :success
  end
end
