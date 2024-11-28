<template>
    <!-- Appointment Start -->
    <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="row mx-0 justify-content-center text-center">
                <div class="col-lg-6">
                    <h6 class="d-inline-block bg-light text-primary text-uppercase py-1 px-2">Appointment</h6>
                    <h1 class="mb-5">Make An Appointment</h1>
                </div>
            </div>
            <div class="row justify-content-center bg-appointment mx-0">
                <div class="col-lg-6 py-5">
                    <div class="p-5 my-5" style="background: rgba(33, 30, 28, 0.7);">
                        <h1 class="text-white text-center mb-4">Make Appointment</h1>
                        <form>
                            <div class="form-row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control bg-transparent p-4" placeholder="Your Name" required />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control bg-transparent p-4" placeholder="Your Email" required/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <div class="date" id="date" data-target-input="nearest">
                                            <input type="date" class="form-control bg-transparent p-4 datetimepicker-input" placeholder="Select Date" data-target="#date" data-toggle="datetimepicker"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <div class="time" id="time" data-target-input="nearest">
                                            <input type="time" class="form-control bg-transparent p-4 datetimepicker-input" placeholder="Select Time" data-target="#time" data-toggle="datetimepicker"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <select class="custom-select bg-transparent px-4" style="height: 47px;">
                                            <option selected>Select A Service</option>
                                            <option value="1">Body Massages</option>
                                            <option value="2">Facial Treatments</option>
                                            <option value="3">Steam Room or Sauna</option>
                                            <option value="4">Body Exfoliation</option>
                                            <option value="5">Manicure and Pedicure</option>
                                            <option value="6">Skin Care</option>
                                            <option value="7">Body Treatments</option>
                                            <option value="8">Hydrotherapy Treatments</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <button class="btn btn-primary btn-block" type="submit" style="height: 47px;">Make Appointment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Appointment End -->
</template>