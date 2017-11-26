<?php

class TaskController extends \BaseController {


	public function store()
	{
		$data = Task::all();
		$i = 1;
		foreach($data as $d)
		{
			$d->index = $i;
			$i++;
		}
		return json_encode($data);
	}


	public function delete()
	{
		$id = Input::get('id');
		Task::find($id)->delete();
		return json_encode('delete');
	}

	public function complete()
	{
		$id = Input::get('id');
		$data = Task::find($id);
		$data->completed = 1;
		$data->update();
		return json_encode('completed');
	}


	public function editTask()
	{
		$id = Input::get('id');
		$task_name = Input::get('task_name');

		$data = Task::find($id);
		$data->task_name = $task_name;
		$data->update();
		return json_encode($data);
	}

	public function addNewTask()
	{
		$task_name = Input::get('task_name');
		$data = new Task;
		$data->task_name = $task_name;
		$data->save();
		return json_encode($data);
	}

}
