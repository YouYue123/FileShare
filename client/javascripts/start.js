$(document).ready(function(){
	refreshFileList();
});

function refreshFileList(){
	$.ajax({
		url: '/files',
		method: 'GET',
		success: function(data){
			$('#file-list').empty();
			data.forEach(file => {
				$('#file-list')
				.append('<a href=/'+file + '>' + file +'</a>')
				.append('</br>')
			});
		},
		error : function(error){

		}
	});
}