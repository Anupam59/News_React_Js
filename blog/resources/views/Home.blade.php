@extends('Layout.app')

@section('content')
    <div class="addButton">
        <button id="AddNewsBtnID" class="btn btn-sm btn-danger ml-2">Add New</button>
    </div>
 <div style="width:90%; text-align: center; margin-left: 100px">
     <table id="NewsListTableId" class="display" style="width:100%; text-align: center">
         <thead>
         <tr>
             <th>Image</th>
             <th>Title</th>
             <th>Sort Details</th>
             <th>Category</th>
             <th>Action</th>
             <th>Action</th>
         </tr>
         </thead>
         <tbody id="news_Table">
         </tbody>
         <tfoot>
         <tr>
             <th>Name</th>
             <th>Position</th>
             <th>Office</th>
             <th>Age</th>
             <th>Start date</th>
             <th>Salary</th>
         </tr>


         </tfoot>
     </table>
 </div>

 <!--News Delete Modal -->
 <div class="modal fade" id="DeleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog">
         <div class="modal-content">
             <div class="modal-header">
                 <h5 class="modal-title" id="exampleModalLabel">Do you want to Delete?</h5>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div class="modal-body">
                 <p id="DeleteModalId"> </p>
             </div>
             <div class="modal-footer">
                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                 <button type="button" id="DeleteConfirmBtn" class="btn btn-primary">Yes</button>
             </div>
         </div>
     </div>
 </div>



    <!-- Edit Modal -->
    <div class="modal fade" id="EditModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog modal-lg">
         <div class="modal-content">
             <div class="modal-header">
                 <h5 class="modal-title" id="exampleModalLabel">Edit and Update</h5>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div class="modal-body">
                 <p id="EditModalId"> </p>

                 <div class="form-outline mb-2">
                     <label>Title</label>
                     <input type="text" id="TitleId" class="form-control" placeholder="Title Name" />
                 </div>

                 <div class="form-outline mb-2">
                     <label>Sort Details</label>
                     <input type="text" id="SortDetailsId" class="form-control" placeholder="Sort Details" />
                 </div>

                 <div class="form-outline mb-2">
                     <label>Details</label>
                     <input type="text" id="DetailsId" class="form-control" placeholder="Description" />
                 </div>

                 <div class="form-outline mb-2">
                     <label>Image url</label>
                     <input type="text" id="ImageId" class="form-control" placeholder="Image url" />
                 </div>

                 <div class="form-outline mb-2">
                     <label>Category</label>
                     <select class="form-select" id="CategoryId" aria-label="Default select example">
                         <option value="play">খেলা</option>
                         <option value="video">ভিডিও</option>
                         <option value="politics">রাজনীতি</option>
                         <option value="ecommerce">অর্থনীতি</option>
                         <option value="entertainment">বিনোদন</option>
                         <option value="art-literature">শিল্প-সাহিত্য</option>
                         <option value="international">আন্তর্জাতিক</option>
                     </select>
                 </div>

             </div>
             <div class="modal-footer">
                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                 <button type="button" id="EditConfirmBtn" class="btn btn-primary">Save</button>
             </div>
         </div>
     </div>
 </div>


    <!-- Add Modal -->
    <div class="modal fade" id="AddModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit and Update</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="form-outline mb-2">
                        <label>Title</label>
                        <input type="text" id="AddTitleId" class="form-control" placeholder="Title Name" />
                    </div>

                    <div class="form-outline mb-2">
                        <label>Sort Details</label>
                        <input type="text" id="AddSortDetailsId" class="form-control" placeholder="Sort Details" />
                    </div>

                    <div class="form-outline mb-2">
                        <label>Details</label>
                        <input type="text" id="AddDetailsId" class="form-control" placeholder="Description" />
                    </div>

                    <div class="form-outline mb-2">
                        <label>Image url</label>
                        <input type="text" id="AddImageId" class="form-control" placeholder="Image url" />
                    </div>

                    <div class="form-outline mb-2">
                        <label>Category</label>
                        <select class="form-select" id="AddCategoryId" aria-label="Default select example">
                            <option value="play">খেলা</option>
                            <option value="politics">রাজনীতি</option>
                            <option value="ecommerce">অর্থনীতি</option>
                            <option value="entertainment">বিনোদন</option>
                            <option value="art-literature">শিল্প-সাহিত্য</option>
                            <option value="international">আন্তর্জাতিক</option>
                        </select>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" id="AddConfirmBtn" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>


@endsection

@section('script')
    <script>
        $(document).ready(function() {
            $('#NewsListTableId').DataTable();
        } );

        getNewsListData();
        //Get Project Data
        function getNewsListData(){
            axios.get('/getNewsListData')
                .then(function (response) {
                    if(response.status==200){

                        $('#NewsListTableId').DataTable().destroy();
                        $('#news_Table').empty();

                        let JsonData = response.data;
                        $.each(JsonData, function (i, item) {
                            $('<tr>').html(
                                "<th class='th-sm'><img class='imageSize' src="+JsonData[i].image+"></th>"+
                                "<th class='th-sm ItemCss'>"+JsonData[i].title+"</th>"+
                                "<th class='th-sm ItemCss'>"+JsonData[i].sort_details+"</th>"+
                                "<th class='th-sm ItemCss'>"+JsonData[i].category+"</th>"+
                                "<th class='th-sm'><a class='EditDetailsBtn' data-id="+JsonData[i].id+" ><i class='fas fa-eye'></i></a></th>"+
                                "<th class='th-sm'><a class='DeleteBtn' data-id="+JsonData[i].id+" ><i class='fas fa-trash-alt'></i></a></th>"
                            ).appendTo('#news_Table');
                        });

                        //Project Table Delete Icon Click
                        $('.DeleteBtn').click(function () {
                            let id = $(this).data('id');
                            $('#DeleteModalId').html(id);
                            $('#DeleteModal').modal('show');
                        });

                        //Project Table Edit Icon Click
                        $('.EditDetailsBtn').click(function () {
                            let id = $(this).data('id');
                            $('#EditModalId').html(id);
                            $('#EditModal').modal('show');
                            UpdateDetails(id)
                        });

                        $('#NewsListTableId').DataTable({"order":false});
                        $('.dataTables_length').addClass('bs-select');
                    }
                    else{
                    }
                }).catch(function (error) {
                    console.log(error);
            });
        }

        //Delete Yes Btn
        $('#DeleteConfirmBtn').click(function () {
            let id = $('#DeleteModalId').html();
            NewsListDelete(id);
        });

        // Get News Delete Id Function
        function NewsListDelete(deleteID){
            $('#DeleteConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
            axios.post('/NewsListDelete',{id:deleteID})
                .then(function (response) {
                    $('#DeleteConfirmBtn').html("Yes");
                    if(response.status==200){
                        if (response.data==1) {
                            $('#DeleteModal').modal('hide');
                            getNewsListData();
                            toastr.success('Delete Success');
                        } else {
                            $('#DeleteModal').modal('hide');
                            getNewsListData();
                            toastr.error('Delete Fail');
                        }
                    }else{
                        $('#DeleteModal').modal('hide');
                        toastr.error('Something Went Wrong');
                    }

                }).catch(function (error) {
                $('#DeleteModal').modal('hide');
                toastr.error('Something Went Wrong');
                $('#DeleteConfirmBtn').html("Yes");
            });
        }

        // Each Details Id Function
        function UpdateDetails(DetailsID){

            axios.post('/getNewsListDetails',{id:DetailsID})
                .then(function (response) {
                    if(response.status==200){

                        $('#SliderEditLoader').addClass('d-none');
                        $('#SliderEditForm').removeClass('d-none');

                        var JsonData = response.data;
                        $('#TitleId').val(JsonData[0].title);
                        $('#SortDetailsId').val(JsonData[0].sort_details);
                        $('#DetailsId').val(JsonData[0].details);
                        $('#ImageId').val(JsonData[0].image);
                        $('#CategoryId').val(JsonData[0].category);

                    }else{
                        $('#EditLoader').addClass('d-none');
                        $('#EditWrong').removeClass('d-none');
                    }

                }).catch(function (error) {
                $('#EditLoader').addClass('d-none');
                $('#EditWrong').removeClass('d-none');
            });
        }

        //Edit Save Btn
        $('#EditConfirmBtn').click(function () {
            let id = $('#EditModalId').html();
            let title = $('#TitleId').val();
            let sort_details = $('#SortDetailsId').val();
            let details = $('#DetailsId').val();
            let image = $('#ImageId').val();
            let category = $('#CategoryId').val();
            NewsUpdate(id,title,sort_details,details,image,category);
        });


        // Each Project Details Id Function
        function NewsUpdate(id,title,sort_details,details,image,category){
            if(id.length==0){
                toastr.error('ProjectId is Empty');
            }else if(title.length==0){
                toastr.error('title is Empty');
            }else if(sort_details.length==0){
                toastr.error('sort_details is Empty');
            }else if(details.length==0){
                toastr.error('details is Empty');
            }else if(image.length==0){
                toastr.error('image is Empty');
            }else if(category.length==0){
                toastr.error('category is Empty');
            }else{
                $('#EditConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
                axios.post('/NewsListUpdate',{
                    id:id,
                    title:title,
                    sort_details:sort_details,
                    details:details,
                    image:image,
                    category:category,
                }).then(function (response) {
                    $('#EditConfirmBtn').html("Save");
                    if(response.status==200){
                        if (response.data==1) {
                            $('#EditModal').modal('hide');
                            toastr.success('Update Success');
                            getNewsListData();
                        } else {
                            $('#EditModal').modal('hide');
                            toastr.error('Update Fail');
                            getNewsListData();
                        }
                    }else{
                        $('#EditModal').modal('hide');
                        toastr.error('Something Went Wrong');
                    }
                }).catch(function (error) {
                    $('#EditModal').modal('hide');
                    toastr.error('Something Went Wrong');
                    $('#EditConfirmBtn').html("Save");
                });
            }
        }

        //Add New News Btn Click
        $('#AddNewsBtnID').click(function(){
            $('#AddModal').modal('show');
        });

        //Add News  Btn
        $('#AddConfirmBtn').click(function () {
            let title = $('#AddTitleId').val();
            let sort_details = $('#AddSortDetailsId').val();
            let details = $('#AddDetailsId').val();
            let image = $('#AddImageId').val();
            let category = $('#AddCategoryId').val();
            AddSlider(title,sort_details,details,image,category);
        });

        //Add New News Input part Empty Btn
        function AddInputEmpty(){
            $('#AddConfirmBtn').click(function () {
                $('#AddTitleId').val(" ");
                $('#AddSortDetailsId').val(" ");
                $('#AddDetailsId').val(" ");
                $('#AddImageId').val(" ");
                $('#AddCategoryId').val(" ");
            });
        }


        //Add New News Function
        function AddSlider(title,sort_details,details,image,category){

            if(title.length==0){
                toastr.error('title is Empty');
            }else if(sort_details.length==0){
                toastr.error('sort_details is Empty');
            }else if(details.length==0){
                toastr.error('details is Empty');
            }else if(image.length==0){
                toastr.error('image is Empty');
            }else if(category.length==0){
                toastr.error('category is Empty');
            }else{
                $('#AddConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
                axios.post('/AddNewsList',{
                    title:title,
                    sort_details:sort_details,
                    details:details,
                    image:image,
                    category:category,
                }).then(function (response) {
                    $('#AddConfirmBtn').html("Add New");
                    if(response.status==200){
                        if (response.data==1) {
                            $('#AddModal').modal('hide');
                            AddInputEmpty();
                            toastr.success('Add Success');
                            getNewsListData();
                        } else {
                            $('#AddModal').modal('hide');
                            AddInputEmpty();
                            toastr.error('Add Fail');
                            getNewsListData();
                        }
                    }else{
                        $('#AddModal').modal('hide');
                        toastr.error('Something Went Wrong');
                        AddInputEmpty();
                    }
                }).catch(function (error) {
                    $('#AddModal').modal('hide');
                    AddInputEmpty();
                    toastr.error('Something Went Wrong');
                    $('#AddConfirmBtn').html("Save");
                });
            }
        }

    </script>


@endsection
