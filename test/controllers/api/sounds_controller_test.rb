require 'test_helper'

class Api::SoundsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_sounds_index_url
    assert_response :success
  end

  test "should get show" do
    get api_sounds_show_url
    assert_response :success
  end

  test "should get create" do
    get api_sounds_create_url
    assert_response :success
  end

  test "should get update" do
    get api_sounds_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_sounds_destroy_url
    assert_response :success
  end

end
