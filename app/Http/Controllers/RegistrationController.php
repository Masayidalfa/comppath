<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Registration;
use Illuminate\Support\Facades\Validator;

class RegistrationController extends Controller
{
    public function index()
    {
        $registrations = Registration::all();
        return response()->json(['success' => true, 'data' => $registrations]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'competition_id' => 'required|exists:competitions,id',
            'requirement_file' => 'required|file|mimes:pdf|max:10240',
            'payment_proof' => 'required|file|mimes:jpeg,png,jpg|max:2048',
        ]);
        
        if ($validator->fails()) {
            return response()->json(['success' => false, 'errors' => $validator->errors()], 422);
        }
        
        $registrationDate = $request->registration_date ?? now()->toDateString();
        
        $requirementPath = $request->file('requirement_file')->store('requirements', 'public');
        $paymentPath = $request->file('payment_proof')->store('payments', 'public');
        
        $registration = Registration::create([
            'user_id' => $request->user_id,
            'competition_id' => $request->competition_id,
            'registration_date' => $registrationDate,
            'requirement_file' => $requirementPath,
            'payment_proof' => $paymentPath,
        ]);
        

        return response()->json(['success' => true, 'data' => $registration]);
    }

    public function show($id)
{
    $registration = Registration::with('competition')->find($id);
    if (!$registration) {
        return response()->json(['success' => false, 'message' => 'Data not found'], 404);
    }
    return response()->json(['success' => true, 'data' => $registration]);
}


    public function update(Request $request, $id)
    {
        // Similar to store with updates applied...
    }

    public function destroy($id)
    {
        $registration = Registration::find($id);
        if (!$registration) {
            return response()->json(['success' => false, 'message' => 'Data not found'], 404);
        }
        $registration->delete();
        return response()->json(['success' => true, 'message' => 'Registration deleted']);
    }
}
